import React from 'react';
import { siginForm } from '../../config';

export default function ({ $auth }) {
    return <$auth {...siginForm} />;
};
