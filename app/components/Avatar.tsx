interface Props {
  size?: number;
  imageUrl: string;
}

export default function Avatar({ size, imageUrl }: Props) {
  const imageWidth = size ? `${size}px` : "33px";
  return (
    <img
      className="shadow-secondary avatar"
      width={imageWidth}
      src={imageUrl}
      alt=""
      referrerPolicy="no-referrer"
    />
  );
}
