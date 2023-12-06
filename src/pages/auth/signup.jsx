import React from 'react';
import { sigupForm } from '../../config';

export default function ({ $auth }) {
    return <$auth {...sigupForm} />;
};
