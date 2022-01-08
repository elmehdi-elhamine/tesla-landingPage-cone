import React from 'react'
import styled from 'styled-components';
import Section from './Section';
const Home = () => {
    return (
        <div>
            <Container>
            <Section
                title="Model 3" 
                description="Order Online for Touchless Delivery"
                backgroundImg="model-3.jpg"
                leftbuttonText="Custom order"
                rightbuttonText="Existing inventory"/>
                

                 <Section
                title="Model Y" 
                description="Order Online for Touchless Delivery"
                backgroundImg="model-y.jpg"
                leftbuttonText="Custom order"
                rightbuttonText="Existing inventory"/>
                <Section
                title="Model S" 
                description="Order Online for Touchless Delivery"
                backgroundImg="model-s.jpg"
                leftbuttonText="Custom order"
                rightbuttonText="Existing inventory"/>

                <Section
                title="Model X" 
                description="Order Online for Touchless Delivery"
                backgroundImg="model-x.jpg"
                leftbuttonText="Custom order"
                rightbuttonText="Existing inventory"/>
                
                 <Section
                title="Solar Panels" 
                description="Lowest Cost Solar Panels in America"
                backgroundImg="solar-panel.jpg"
                leftbuttonText="Order Now"
                rightbuttonText="Learn more"/>
                <Section
                title="Solar Roof" 
                description="Produce Clean Energy From Your Roof"
                backgroundImg="solar-roof.jpg"
                leftbuttonText="Order Now"
                rightbuttonText="Learn more"/>
                 <Section
                title="Accesories" 
                
                backgroundImg="accessories.jpg"
                leftbuttonText="Shop Now"
                rightbuttonText=""/>
            </Container>
        </div>
    )
}
const Container=styled.div`
height:100vh;
`;

export default Home
