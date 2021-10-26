import React from 'react'

import ProfilePhoto from './ProfilePhoto'

export default {
    title: 'Domakedev/Atomos/ProfilePhoto',
    component: ProfilePhoto,
};

const Template = (args) => <ProfilePhoto {...args} />;


export const Circular = Template.bind({})
Circular.args = {
    type: "circular",
    size: "medium",
}
export const Cuadrado = Template.bind({})
Cuadrado.args = {
    type: "cuadrado",
    size: "medium",
}