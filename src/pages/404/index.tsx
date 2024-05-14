import { useLocalizationContext } from "../../context/_useLocalizationContext"
import { TFCReturn } from "@/types/_common.types.ts"

export default function Page404(): TFCReturn {
  const {
    l: { notFound },
  } = useLocalizationContext()

  return <h1>{notFound.title}</h1>
}
