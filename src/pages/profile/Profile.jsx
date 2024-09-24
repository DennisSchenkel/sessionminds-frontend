import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button, Image } from "react-bootstrap";
import ToolsListItem from "../../components/tools/ToolsListItem";
import axios from "../../api/axiosDefault";


export default function Profile() {

    const { slug } = useParams();

    const [error, setError] = useState(null);

    const [profileData, setProfileData] = useState({});
    const [tools, setTools] = useState([]);

    useEffect(() => {
        const fetchProfile = async () => {
          try {
            const response = await axios.get(`/profiles/${slug}/`);
            const profile = response.data;
            setProfileData(profile);
          } catch (error) {
            setError(error)
          }
        };
        fetchProfile();
      }, [slug]);

    useEffect(() => {
      const fetchProfileTools = async () => {
        try {
          const response = await axios.get(`/tools/user/${profileData.user_id}/`);
          const tools = response.data.results;
          setTools(tools);
          console.log(tools);
        } catch (error) {
          setError(error)
        }
      };
      if (profileData.id) {
        fetchProfileTools();
      }
    }, [profileData]);

    return (
      <>

        {error ? <p>{error.message}</p> : <></>}

        <div className="row">
          <div className="col-auto text-center">
            <Image src={profileData.image} width={150} className="rounded-circle" />
            <div className="d-grid gap-2">
              {profileData.is_owner ? <Button href={`/profile/editor/${slug}/`} className="mt-4">Edit profile</Button> : <></>}
              {profileData.is_owner ? <Button href={`/profile/editor/${slug}/`} className="mt-2 wd-300" variant="danger">Delete profile</Button> : <></>}
            </div>

          </div>
          <div className="col-auto">
            <h1>{profileData.first_name + " " + profileData.last_name} </h1>
            {profileData.job_title ? <p><b>Job Title: </b> {profileData.job_title}</p> : <></>}
            {profileData.profile_description ? <p>{profileData.profile_description}</p> : <></>}
            {
            profileData.linkedin && profileData.twitter && profileData.facebook && profileData.instagram ? 
              <>
                <h2>Social Media</h2>
                <ul className="list-unstyled mb-5">
                  {profileData.linkedin ? <li><a href={profileData.linkedin} target="_blank">LinkedIn</a></li> : <></>}
                  {profileData.twitter ? <li><a href={profileData.twitter} target="_blank">Twitter</a></li> : <></>}
                  {profileData.facebook ? <li><a href={profileData.facebook} target="_blank">Facebook</a></li> : <></>}
                  {profileData.instagram ? <li><a href={profileData.instagram} target="_blank">Instagram</a></li> : <></>}
                </ul>
              </>          
            : 
            <></>
            }
          </div>
        </div>

        <div className="mt-5">
            {profileData.tool_count ? <><h2>Tools</h2><hr /></> : <></>}
            
            {tools.map((tool) => (
              <ToolsListItem key={tool.id} tool={tool} />
            ))}
        </div>
      </>
    );
    }
    