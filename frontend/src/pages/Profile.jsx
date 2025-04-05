import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateUserStart, updateUserSuccess, updateUserFailure } from '../redux/user/userSlice';
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';
import { app } from '../firebase';
import { Link } from 'react-router-dom';

export default function Profile() {
    const { currentUser, loading } = useSelector((state) => state.user);
    const [image, setImage] = useState(null);
    const [imagePercent, setImagePercent] = useState(0);
    const [imageError, setImageError] = useState(null);
    const [formData, setFormData] = useState({});
    const [updateSuccess, setUpdateSuccess] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        if (image) {
            handleFileUpload(image);
        }
    }, [image]);

    const handleFileUpload = async (image) => {
        const storage = getStorage(app);
        const fileName = new Date().getTime() + image.name;
        const storageRef = ref(storage, fileName);
        const uploadTask = uploadBytesResumable(storageRef, image);

        uploadTask.on(
            'state_changed',
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setImagePercent(Math.round(progress));
            },
            (error) => {
                setImageError('Could not upload image (File must be less than 2MB)', error);
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setFormData({ ...formData, profilePicture: downloadURL });
                });
            }
        );
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            dispatch(updateUserStart());

            const res = await fetch(`/api/user/update/${currentUser._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (data.success === false) {
                dispatch(updateUserFailure(data.message));
                return;
            }

            dispatch(updateUserSuccess(data));
            setUpdateSuccess(true);
        } catch (error) {
            dispatch(updateUserFailure(error.message));
        }
    };

    return (
        <div className="min-h-screen max-w-lg mx-auto p-3 mt-24">
            <h1 className="text-3xl font-semibold text-center my-7">Profile</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="flex justify-center">
                    <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => setImage(e.target.files[0])}
                        className="hidden"
                        id="imageInput"
                    />
                    <label htmlFor="imageInput" className="cursor-pointer">
                        <div className="relative">
                            <img
                                src={formData.profilePicture || currentUser.photoURL || 'https://via.placeholder.com/100'}
                                alt="profile"
                                className="h-24 w-24 rounded-full object-cover border-4 border-blue-500 hover:opacity-80 transition-opacity"
                            />
                            <div className="absolute bottom-0 right-0 bg-blue-500 text-white rounded-full p-1 text-xs">
                                Edit
                            </div>
                        </div>
                    </label>
                </div>

                {imageError && (
                    <p className="text-red-500 text-center">{imageError}</p>
                )}

                {imagePercent > 0 && imagePercent < 100 ? (
                    <p className="text-center text-sm">Uploading: {imagePercent}%</p>
                ) : imagePercent === 100 ? (
                    <p className="text-center text-sm text-green-500">Image uploaded successfully</p>
                ) : null}

                <div>
                    <label className="text-gray-700 block mb-2">Username</label>
                    <input
                        type="text"
                        id="displayName"
                        placeholder="Username"
                        defaultValue={currentUser.displayName || ''}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label className="text-gray-700 block mb-2">Email</label>
                    <input
                        type="email"
                        id="email"
                        defaultValue={currentUser.email}
                        disabled
                        className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-500"
                    />
                </div>

                <button
                    type="submit"
                    disabled={loading || imagePercent > 0 && imagePercent < 100}
                    className="bg-blue-500 text-white py-3 rounded-lg uppercase hover:bg-blue-600 disabled:opacity-70"
                >
                    {loading ? 'Loading...' : 'Update Profile'}
                </button>

                <Link to="/" className="text-center text-blue-500 hover:underline">
                    Back to Home
                </Link>
            </form>

            {updateSuccess && (
                <div className="mt-5 text-center bg-green-100 text-green-700 p-3 rounded-lg">
                    Profile updated successfully!
                </div>
            )}
        </div>
    );
} 