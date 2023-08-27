function ProfilePhoto(props) {
  const imgSrc = ((props.imgSrc !== "") ? props.imgSrc : "img/user.png");
  
  return (
    <img className="profile-photo radius-circle" src={imgSrc} alt="User" />
  );
}

export default ProfilePhoto;
