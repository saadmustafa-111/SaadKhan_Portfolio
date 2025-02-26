export default function Location() {
  return (
    <>
      <div id="location" className="relative w-full h-96">
        <iframe
          className="absolute top-0 left-0 w-full h-full border-0"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3317.336858267634!2d72.82315467623435!3d33.74533817328513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df1bcd75cded7f%3A0x4f23fdf82a909546!2sTaxila%2C%20Rawalpindi%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1708634854736!5m2!1sen!2s"
          allowFullScreen
          aria-hidden="false"
          tabIndex={0}
        ></iframe>
      </div>
    </>
  );
}
