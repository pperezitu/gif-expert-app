import React from "react";
import { shallow } from "enzyme";
import { GifgridItem } from "../../componentes/gifGridItem";
 
describe('Pruebas en <GifGridItem />', () => {
    test('Debe de mostrar el componente correctamente', () => {
        const title = 'Un Titulo';
        const url = 'https//:localhost/algo.png';
        const wrapper = shallow(<GifgridItem title={title} url={url}/>);
        expect(wrapper).toMatchSnapshot();
    })
})