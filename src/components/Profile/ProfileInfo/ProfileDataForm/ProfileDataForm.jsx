import React from "react";
import { useForm } from "react-hook-form";
import { useState, useEffect } from 'react';

const ProfileDataForm = ({ profile, updateProfileInfo }) => {

  const [localProfile, setLocalProfile] = useState(profile);

  useEffect(() => {
    setLocalProfile(profile);
  }, [profile]);

  const onProfileChange = (e) => {
    setLocalProfile(prevProfile => ({
      ...prevProfile,
      contacts: {
        ...prevProfile.contacts,
        [e.target.name]: e.target.value
      }
    }));
  }

  const { register, handleSubmit } = useForm({
    defaultValues: {
      aboutMe: profile.aboutMe,
      contacts: {
        facebook: null,
        website: null,
        vk: null,
        twitter: null,
        instagram: null,
        youtube: null,
        github: null,
        mainLink: null
      },
      lookingForAJob: false,
      lookingForAJobDescription: profile.lookingForAJobDescription,
      fullName: profile.fullName
    }
});

  const handleSave = async (NewPofile) => {
     await updateProfileInfo(NewPofile);
  };

  return (
    <form onSubmit={handleSubmit(handleSave)}>
      <div>
      <div>
          <textarea
            autoFocus={true}
            onChange={onProfileChange}
            name="aboutMe"
            placeholder={"About me"}
            {...register('aboutMe')}
          />
        </div>
        <div>
          <h4>Contacts:</h4>
          {Object.keys(localProfile.contacts).map(key => (
            <div key={key}>
              <b>{key}:</b>
              <input
                autoFocus={true}
                onChange={onProfileChange}
                name={`contacts.${key}`}
                placeholder={key}
                {...register(`contacts.${key}`)}
              />
            </div>
          ))}
        </div>
        <div>
          <input
            type="checkbox"
            autoFocus={true}
            onChange={onProfileChange}
            name="lookingForAJob"
            {...register('lookingForAJob')}
          />
        </div>
        <div>
          <input
            autoFocus={true}
            onChange={onProfileChange}
            name="lookingForAJobDescription"
            placeholder={"Description"}
            {...register('lookingForAJobDescription')}
          />
        </div>
        <div>
          <input
            onChange={onProfileChange}
            name="fullName"
            type="string"
            placeholder={"fullName"}
            {...register("fullName", {
              required: "Full Name is required!"
            })}
          />
        </div>
      </div>

      <button type="submit">Submit</button>
    </form>
  )
}

export default ProfileDataForm;
