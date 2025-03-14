import { AuthProvider,useAuth } from "./context/AuthContext";
import { Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./pages/Landing";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Logout from "./pages/Logout";
import UserProfile from "./pages/UserProfile";
import AlbumList from "./pages/AlbumList";
import AlbumPhotos from "./pages/AlbumPhotos";
import PostComments from "./pages/PostComments";
import User from "./pages/User";
import Photos from "./pages/Photos";

function App() {
    return (
        <AuthProvider>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/logout" element={<PrivateRoute><Logout /></PrivateRoute>} />
                <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
                <Route path="/users" element={<PrivateRoute><User /></PrivateRoute>} />
                <Route path="/users/:userId" element={<PrivateRoute><UserProfile /></PrivateRoute>} />
                <Route path="/albums" element={<PrivateRoute><AlbumList /></PrivateRoute>} />
                <Route path="/albums/:albumId/photos" element={<PrivateRoute><AlbumPhotos /></PrivateRoute>} />
                <Route path="/posts/:postId/comments" element={<PrivateRoute><PostComments /></PrivateRoute>}/>
                <Route path="/photos" element={<PrivateRoute><Photos /></PrivateRoute>}/>
            </Routes>
        </AuthProvider>
    );
}

const PrivateRoute = ({ children }) => {
    const { user } = useAuth();
    return user ? children : <Navigate to="/login" />;
};

export default App;
