export interface UserInfoProps{
    name: string,
    age: number,
    email: string
}

const UserInfo: React.FC<UserInfoProps>=(props) => {
    return (
        <div>
            <h1>Person Details</h1>
            <h2>{props.name}</h2>
            <p>{`Age: ${props.age}`}</p>
            <p>{`Email: ${props.email || 'no email provided'}`}</p>
        </div>
    );
};

export default UserInfo;