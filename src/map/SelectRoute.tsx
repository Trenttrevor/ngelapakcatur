import { Button } from "@/components/ui/button"
import { MapRoute } from "@/components/ui/map"
import { Route } from "lucide-react"
import { useEffect, useState } from "react"

// const startPoint = { name: "Park", lng: 12.3600768, lat: 51.3308161 }
// const endPoint = { name: "Markleeberg", lng: 12.3699075, lat: 51.2692856 }

interface RouteData {
  coordinates: [number, number][]
  distance: number
}

function formatDistance(meters: number): string {
  if (meters < 1000) return `${Math.round(meters)} m`
  return `${(meters / 1000).toFixed(1)} km`
}

type Point = {
  name: string
  lng: number
  lat: number
}

export const SelectRoute = ({
  start,
  end,
  setStart,
  setEnd,
}: {
  start: { name: string; lng: number; lat: number }
  end: { name: string; lng: number; lat: number }
  setStart: (p: Point | null) => void
  setEnd: (p: Point | null) => void
}) => {
  const [routes, setRoutes] = useState<RouteData[]>([])
  const [selectedIndex, setSelectedIndex] = useState(0)

  useEffect(() => {
    const fetchRoutes = async () => {
      try {
        const response = await fetch(
          `https://router.project-osrm.org/route/v1/driving/${start.lng},${start.lat};${end.lng},${end.lat}?overview=full&geometries=geojson&alternatives=true`
        )
        const data = await response.json()

        if (data.routes?.length > 0) {
          const routeData: RouteData[] = data.routes.map(
            (route: {
              geometry: { coordinates: [number, number][] }
              distance: number
            }) => ({
              coordinates: route.geometry.coordinates,
              distance: route.distance,
            })
          )
          setRoutes(routeData)
        }
      } catch (error) {
        console.error("Failed to fetch routes:", error)
      }
    }
    fetchRoutes()
  }, [])

  const sortedRoutes = routes
    .map((route, index) => ({ route, index }))
    .sort((a, b) => {
      if (a.index === selectedIndex) return 1
      if (b.index === selectedIndex) return -1
      return 0
    })

  return (
    <>
      {sortedRoutes.map(({ route, index }) => {
        const isSelected = index === selectedIndex
        return (
          <>
            <MapRoute
              key={index}
              coordinates={route.coordinates}
              color={isSelected ? "#6366f1" : "#94a3b8"}
              width={isSelected ? 6 : 5}
              opacity={isSelected ? 1 : 0.6}
              onClick={() => setSelectedIndex(index)}
            />
            <div className="absolute top-5 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-2xl bg-[#D3D3D4] p-2 text-xs text-[#3D3D3D] opacity-80">
              <div className="flex items-center justify-center gap-x-2">
                <span className="flex gap-2 text-2xl font-medium">
                  Distance: <Route className="size-5" />
                  {formatDistance(route.distance)}
                </span>
                <Button
                  onClick={() => {
                    setRoutes([])
                    setStart(null)
                    setEnd(null)
                  }}
                  variant="secondary"
                >
                  Reset
                </Button>
              </div>
            </div>
          </>
        )
      })}
    </>
  )
}
