import useAuth from "../../../hooks/useAuth";


const DonerHome = () => {
    const {user}= useAuth()
    return (
        <div>
            welcome:{user.displayName}
        </div>
    );
};

export default DonerHome;