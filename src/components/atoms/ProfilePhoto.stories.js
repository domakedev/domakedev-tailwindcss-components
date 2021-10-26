import React from 'react'

import ProfilePhoto from './ProfilePhoto'

export default {
    title: 'Domakedev/Atomos/ProfilePhoto',
    component: ProfilePhoto,
};

const Template = (args) => <ProfilePhoto {...args} />;


export const CircularSmall = Template.bind({})
CircularSmall.args = {
    type: "circular",
    size: "small",
}
export const CircularMedium = Template.bind({})
CircularMedium.args = {
    type: "circular",
    size: "medium",
}
export const CircularBig = Template.bind({})
CircularBig.args = {
    type: "circular",
    size: "big",
}

export const CuadradoSmall = Template.bind({})
CuadradoSmall.args = {
    type: "cuadrado",
    size: "small",
}
export const CuadradoMedium = Template.bind({})
CuadradoMedium.args = {
    type: "cuadrado",
    size: "medium",
}
export const CuadradoBig = Template.bind({})
CuadradoBig.args = {
    type: "cuadrado",
    size: "big",
}