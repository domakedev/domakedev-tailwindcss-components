import React from 'react'

import Paragraph from './Paragraph'

export default {
    title: 'Domakedev/Atomos/Paragraph',
    component: Paragraph,
};

const Template = (args) => <Paragraph {...args} />;

export const Parrafo = Template.bind({})
Parrafo.args = {
    children: "Parrafos"
}
