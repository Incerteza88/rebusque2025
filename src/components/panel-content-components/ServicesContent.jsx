import { useEffect, useState } from "react"

export const ServicesContent = () => {

  const [myServices, setMyServices] = useState([])

  useEffect(() => {
    // Aquí puedes hacer una llamada a una API o cargar datos desde otro lugar
    // Por ahora, vamos a usar datos estáticos como ejemplo
  }, [])

  return (
    <div className="w-100">
      SerivicesContent
    </div>
  )
}
