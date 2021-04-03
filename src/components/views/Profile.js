import { Typography } from '@material-ui/core';
import React from 'react';
import { useTranslation } from 'react-i18next';

const Profile = () => {
    const { t, i18n } = useTranslation();
    return (
        
        <React.Fragment>
            <Typography>
                {t("Welcome, this is your profile")}
            </Typography>
        </React.Fragment>
    )
}

export default Profile;