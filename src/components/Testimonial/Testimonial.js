import React from "react";
import Carousel from "react-elastic-carousel";
import Card from "../Cards/Card";
const Testimonial = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 800, itemsToShow: 3 },
  ];
  return (
    <div style={{margin:"5vw"}}>
      <div
        style={{
          color: "white",
          textAlign: "center",
          fontSize: "clamp(1.5rem, 0rem + 3.5vw, 3.5rem)",
          marginBottom:"35px"
        }}
      >
        ᴡʜʏ ᴜs!
      </div>
      <Carousel
        breakPoints={breakPoints}
        emulateTouch={true}
        useKeyboardArrows={true}
        stopOnHover={false}
        dataTouch={true}
        itemsToScroll={1}
        showEmptySlots={false}
        enableAutoPlay={true}
        autoPlaySpeed={10000}
      >
        <div class="item">
          <Card
            img="https://thumbs.dreamstime.com/b/gym-24699087.jpg"
            title="Amazing Equipments"
          />
        </div>
        <div class="item">
          <Card
            img="https://thumbs.dreamstime.com/b/muscular-athletic-bodybuilder-fitness-model-posing-exercis-weights-exercises-gym-64856941.jpg"
            title="Great Trainers"
          />
        </div>
        <div class="item">
          <Card
            img="https://blog.nasm.org/hubfs/cleangym%20%281%29.jpg"
            title="Cleanliness"
          />
        </div>
        <div class="item">
          <Card
            img="https://img.freepik.com/free-photo/woman-with-gloves-cleaning-solution-disinfecting-gym-equipment_23-2148766028.jpg?w=2000"
            title="Hardworking Staff"
          />
        </div>
        <div class="item">
          <Card
            img="https://images.news18.com/ibnlive/uploads/2021/11/muscles-16366092524x3.jpg"
            title="For Everyone"
          />
        </div>
        <div class="item">
          <Card
            img="http://samuelallenscott.net/wp-content/uploads/2019/06/1561610714_maxresdefault.jpg"
            title="Music Facilities"
          />
        </div>
        <div class="item">
          <Card
            img="https://thumbs.dreamstime.com/b/sporty-sexy-couple-showing-muscle-workout-gym-muscular-man-wowan-men-112412386.jpg"
            title="Tremendous Results"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Testimonial;
