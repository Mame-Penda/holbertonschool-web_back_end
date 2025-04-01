export default function createInt8TypedArray(lenght, position, value) {
  const buffer = new ArrayBuffer(lenght);
  const look = new DataView(buffer);
  if (position < 0 || position >= lenght) {
    throw new Error('Position outside range');
  }
  look.setInt8(position, value);
  return look;
}
