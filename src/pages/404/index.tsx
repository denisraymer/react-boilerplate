import { useLocalizationContext } from "../../context/localization/_LocalizationContext.tsx"
import { TFCReturn } from "@/types/_common.types.ts"

export default function Page404(): TFCReturn {
  const {
    l: { notFound },
  } = useLocalizationContext()

  return <h1>{notFound.title}</h1>
}
