import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaQuestion, FaWhatsapp } from 'react-icons/fa';

export default function ({ platform, ...rest }) {
    const iconMap = {
        youtube: FaYoutube,
        twitter: FaTwitter,
        facebook: FaFacebook,
        linkedin: FaLinkedin,
        whatsapp: FaWhatsapp,
        instagram: FaInstagram,
    };

    const IconComponent = iconMap[platform] || FaQuestion;
    return <IconComponent {...rest} />;
};
