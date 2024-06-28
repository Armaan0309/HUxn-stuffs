import React, { useState } from 'react'

const Testimonial = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const testimonials=[
        {
            quote:"This is the best Product i have ever used!",
            author:"Jane Hussain",
        },
        {
            quote:"This would be even better!",
            author:"Jhon Cena",
        },
        {
            quote:"This is the Worst experience!",
            author:"Brock lensener",
        }
    ]

    const handlePrevClick=()=>{
        setCurrentIndex(
            (currentIndex + testimonials.length-1)%testimonials.length
        )
    }
    const handleNextClick=()=>{
        setCurrentIndex(
            (currentIndex +1)%testimonials.length
        )
    }


  return (
    <>
        <div className="testimonials">
            <div className="testimonial-quotes">
                {
                    testimonials[currentIndex].quote
                }
            </div>
            <div className="testimonial-author">
                {
                    testimonials[currentIndex].author
                }
            </div>
            <testimonial className="nav">
                <button onClick={handlePrevClick}>Previous</button>
                <button onClick={handleNextClick}>Next</button>
            </testimonial>
        </div>

    </>
  )
}

export default Testimonial
