const Section = ({ className, id, children }) => {
  return (
    <section className={`h-screen scroll-custom ${className || ""}`} id={id}>
      {children}
    </section>
  )
}

export default Section
