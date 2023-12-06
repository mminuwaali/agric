/** 
 * configuration settings should be here, e.g: signup, signin configurations
 * also asset files, we want to set this file as the single source of truth
*/

export { default as leafImg } from './assets/images/leaf.svg';
export { default as heroImg } from './assets/images/hero.svg';
export { default as logoWhite } from './assets/icons/logo.png';
export { default as logoGreen } from './assets/icons/logo.png';

export const headerLinks = [
    {}
];

export const siginForm = {
    title: 'Sign in',
    button: 'Sign in',
    inputs: [
        {
            type: 'text',
            required: true,
            name: 'username',
            label: 'username',
            placeholder: 'Enter your username',
        },
        {
            required: true,
            type: 'password',
            name: 'password',
            label: 'password',
            placeholder: 'Enter a your password',
        },
    ],
};

export const sigupForm = {
    title: 'Sign up',
    button: 'Sign up',
    inputs: [
        {
            type: 'text',
            required: true,
            name: 'first_name',
            label: 'first name',
            placeholder: 'Enter your First Name',
        },
        {
            type: 'text',
            required: true,
            name: 'last_name',
            label: 'last name',
            placeholder: 'Enter your Last Name',
        },
        {
            type: 'email',
            name: 'email',
            label: 'email',
            required: true,
            placeholder: 'Enter a unique email',
        },
        {
            type: 'text',
            required: true,
            name: 'username',
            label: 'username',
            placeholder: 'Enter a unique username',
        },
        {
            required: true,
            type: 'password',
            name: 'password',
            label: 'password',
            placeholder: 'Enter a unique password',
        },
    ],
};
