import React from "react";
import { useForm } from "react-hook-form";
import { useState, useEffect } from 'react';

const ProfileDataForm = ({ profile, updateProfileInfo, deActivateEditor }) => {

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
        facebook: profile.contacts.facebook,
        website: profile.contacts.website,
        vk: profile.contacts.vk,
        twitter: profile.contacts.twitter,
        instagram: profile.contacts.instagram,
        youtube: profile.contacts.youtube,
        github: profile.contacts.github,
        mainLink: profile.contacts.mainLink
      },
      lookingForAJob: profile.lookingForAJob,
      lookingForAJobDescription: profile.lookingForAJobDescription,
      fullName: profile.fullName
    }
});

  const handleSave = async (NewPofile) => {
     await updateProfileInfo(NewPofile);
     deActivateEditor();
  };

  return (
    <form onSubmit={handleSubmit(handleSave)}>
      <div>
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
        <div>
          <textarea
            autoFocus={true}
            onChange={onProfileChange}
            name="lookingForAJobDescription"
            placeholder={"Description"}
            {...register('lookingForAJobDescription')}
          />
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
      </div>

      <button type="submit">Submit</button>
    </form>
  )
}

export default ProfileDataForm;
