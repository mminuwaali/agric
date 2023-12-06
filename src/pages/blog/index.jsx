import React from 'react';
import $blog from '../../components/blog';
import { $blog as $form } from '../../components/forms';
import { $blogCateogries } from '../../components/cards';

export default function () {
    return <>
        <$form>
            <$blogCateogries />
        </$form>
        <$blog />
    </>;
};
