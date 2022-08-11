import React from "react";
import Carousel from "react-elastic-carousel";
import BigCard from "../Cards/BigCard";
const Equipments = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 410, itemsToShow: 2 },
    { width: 629, itemsToShow: 3 },
    { width: 854, itemsToShow: 3 },
  ];
  return (
    <div style={{margin:"5vw"}} id="Equipments">
      <div
        style={{
          color: "white",
          textAlign: "center",
          fontSize: "clamp(1.5rem, 0rem + 3.2vw, 2.5rem)",
          marginBottom:"35px"

        }}
      >
        Equipments
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
        autoPlaySpeed={5000}
      >
        <div class="item">
          <BigCard
            image="https://watermark.lovepik.com/photo/20211126/large/lovepik-exercise-and-fitness-equipment-picture_501088712.jpg"
            title="Hammer Strength"
          />
        </div>
        <div class="item">
          <BigCard
            image="https://watermark.lovepik.com/photo/20211126/large/lovepik-gym-fitness-equipment-picture_501101991.jpg"
            title="Treadmils"
          />
        </div>
        <div class="item">
          <BigCard
            image="https://watermark.lovepik.com/photo/20211129/large/lovepik-fitness-equipment-dumbbell-barbell-picture_501193552.jpg"
            title="Dumbles"
          />
        </div>
        <div class="item">
          <BigCard
            image="https://watermark.lovepik.com/photo/20211120/large/lovepik-gym-and-fitness-equipment-picture_500504393.jpg"
            title="Yoga Mats"
          />
        </div>
        <div class="item">
          <BigCard
            image="https://watermark.lovepik.com/photo/20211126/large/lovepik-exercise-and-fitness-equipment-picture_501088686.jpg"
            title="Leg Press"
          />
        </div>
        <div class="item">
          <BigCard
            image="https://img.lovepik.com/photo/20211126/small/lovepik-exercise-and-fitness-equipment-picture_501088716.jpg"
            title="Decline Barbel"
          />
        </div>
        <div class="item">
          <BigCard
            image="https://media.istockphoto.com/photos/rubber-yoga-ball-for-exercise-picture-id1161865549?b=1&k=20&m=1161865549&s=170667a&w=0&h=SbGyA4mEWyJwN-7D0dW8NaskY3r6VR0Dmau1iYflw4w="
            title="Gym Balls"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Equipments;
