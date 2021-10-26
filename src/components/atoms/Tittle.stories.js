import React from 'react'

import Tittle from './Tittle'

export default {
    title: 'Domakedev/Atomos/Tittle',
    component: Tittle,
};

const Template = (args) => <Tittle {...args} />;

export const Titulo = Template.bind({})
Titulo.args = {
    children: "Titulo"
}
