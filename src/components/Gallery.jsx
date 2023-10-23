import HornedBeast from "./HornedBeast";

export default function Gallery() {
  return (
    <div className="gallery">
      <HornedBeast
        title="beast1"
        imageUrl="https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FMarkhor&psig=AOvVaw1bBft_kzTdMc5oAXilyHuY&ust=1698154712379000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCJiGyreljIIDFQAAAAAdAAAAABAE"
        description="Lorem1 ipsum dolor sit amet."
      />
      <HornedBeast
        title="beast2"
        imageUrl="https://upload.wikimedia.org/wikipedia/commons/3/3a/Oryx_Dammah.jpg"
        description="Lorem2 ipsum dolor sit amet."
      />
      <HornedBeast
        title="beast3"
        imageUrl="https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcQcQvVhrkqn45HDeT6Yt7Qui0PPOwXm6PeG-WzsBO1fvUeKlOUGdv35D3OTQ3G8FcxM"
        description="Lorem3 ipsum dolor sit amet."
      />
    </div>
  );
}
