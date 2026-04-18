export function PlacesEarthPlanet(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M27.4995 10.0166L22.4995 18.6768L15.0466 5.76758L0.09375 31.6666H39.9994L27.4995 10.0166ZM4.42392 29.1666L15.0466 10.7676L21.0561 21.1761L16.4428 29.1666H4.42392ZM19.3296 29.1666L27.4995 15.0166L35.6693 29.1666H19.3296Z" fill="black"/>
</svg>

  );
} 

export function Water(props: React.SVGProps<SVGSVGElement>) {
  return ( 
<svg {...props} 
width="40"
height="40"
viewBox="0 0 40 40"
fill="none"
xmlns="http://www.w3.org/2000/svg">
<path d="M19.9999 4.36033C24.1234 9.09183 30.8357 18.219 30.8357 24.998C30.8357 27.8718 29.6941 30.628 27.6621 32.6602C25.6299 34.6922 22.8737 35.8338 19.9999 35.8338C17.1261 35.8338 14.3699 34.6922 12.3378 32.6602C10.3057 30.628 9.16406 27.8718 9.16406 24.998C9.16406 18.219 15.8764 9.09183 19.9999 4.36033ZM19.9999 0.660323C19.9999 0.660323 6.66406 14.3292 6.66406 24.998C6.66406 28.5348 8.0691 31.9268 10.57 34.4278C13.071 36.9288 16.463 38.3338 19.9999 38.3338C23.5367 38.3338 26.9287 36.9288 29.4297 34.4278C31.9307 31.9268 33.3357 28.5348 33.3357 24.998C33.3357 14.3292 19.9999 0.660323 19.9999 0.660323Z" fill="black"/>
</svg>
);
} 

export function Mountains(props: React.SVGProps<SVGSVGElement>) {
  return (
   <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.04987 29.1018L3.2832 27.3334L15.7782 14.8401L23.3933 22.4551L34.9499 10.8984L36.7166 12.6651L23.3933 25.9901L15.7782 18.3751L5.04987 29.1018Z" fill="black"/>
</svg>

  );
} 
export function ArrRigth(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props} // Позволяет принимать классы Tailwind
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.121 2.80791L12.707 4.22191L19.485 10.9999L1 10.9999L1 12.9999L19.485 12.9999L12.707 19.7779L14.121 21.1919L23.313 11.9999L14.121 2.80791Z"
        fill="currentColor" // <-- Теперь цвет зависит от цвета текста!
      />
    </svg>
  );
}