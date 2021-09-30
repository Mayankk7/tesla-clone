import React from 'react'
import styled from "styled-components"
import Section from './Section'
function Home() {
    return (
        <Container>
            <Section 
                title="Model S"
                description="Order Online for Touchless Delievery"
                backgroundImg="model-s.jpg"
                leftBtnText="Custom order"
                rightBtnText="Existing Inventory"

            />
            <Section
                title="Model Y"
                desciption="Order Online for Touchless Delievery"
                backgroundImg="model-y.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
            />
            <Section
                title="Model 3"
                desciption="Order Online for Touchless Delievery"
                backgroundImg="model-3.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
            />
            <Section
                title="Model X"
                desciption="Order Online for Touchless Delievery"
                backgroundImg="model-x.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
            />

                <Section
                title="Lowest Cost Solar Panels in America"
                desciption="Money-back guarantee"
                backgroundImg="solar-panel.jpg"
                leftBtnText="Order Now"
                rightBtnText="Learn More"
            />

            <Section
                title="Solar Panels for New Roofs"
                desciption="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
                backgroundImg="solar-roof.jpg"
                leftBtnText="Order Now"
                rightBtnText="Learn More"
            />

            <Section
                title="Accessories"
                desciption=""
                backgroundImg="accessories.jpg"
                leftBtnText="Shop Now"
                
            />  
        </Container>
    )
}

export default Home

const Container = styled.div`
    height: 100vh;
`