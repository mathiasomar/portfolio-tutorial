const Section = ({ className, id, children, ref }) => {
  return (
    <section ref={ref} className={`h-screen scroll-custom ${className || ""}`} id={id}>
      {children}
    </section>
  )
}

export default Section
