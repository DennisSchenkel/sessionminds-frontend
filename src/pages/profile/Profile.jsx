import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import axios from "../../api/axiosDefault";


export default function Profile() {

    const { slug } = useParams();

    const [profileData, setProfileData] = useState({});

    console.log(slug);

    useEffect(() => {
        const fetchProfile = async () => {
          try {
            const response = await axios.get(`/profiles/${slug}/`);
            const profile = response.data;
            setProfileData(profile);
          } catch (error) {
            console.error("Failed to fetch profile:", error);
          }
        };
        fetchProfile();
      }, [slug]);






    return (
        <div>
        <h1>Profile</h1>
        <p>{profileData.first_name}</p>
        {profileData.is_owner ? <><Button>Edit profile</Button></> : ""}
        </div>
    );
    }
    