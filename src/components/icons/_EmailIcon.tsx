import { TIcon } from "@/types/_common.types.ts"
import { theme } from "../../styles/theme.ts"

export default function EmailIcon({
  width = 22,
  height = 18,
  fill = theme.palette.font.dark,
}: TIcon) {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.9997 17.5H3.9997C2.93918 17.4989 1.92242 17.0771 1.17252 16.3272C0.422619 15.5773 0.000828934 14.5605 -0.000301361 13.5V4.5C0.000828934 3.43948 0.422619 2.42272 1.17252 1.67282C1.92242 0.92292 2.93918 0.50113 3.9997 0.5H17.9997C19.0602 0.50113 20.077 0.92292 20.8269 1.67282C21.5768 2.42272 21.9986 3.43948 21.9997 4.5V13.5C21.9986 14.5605 21.5768 15.5773 20.8269 16.3272C20.077 17.0771 19.0602 17.4989 17.9997 17.5ZM3.9997 2.5C3.46945 2.50061 2.9611 2.71151 2.58615 3.08646C2.21121 3.4614 2.0003 3.96975 1.9997 4.5V13.5C2.0003 14.0302 2.21121 14.5386 2.58615 14.9135C2.9611 15.2885 3.46945 15.4994 3.9997 15.5H17.9997C18.5299 15.4994 19.0383 15.2885 19.4132 14.9135C19.7882 14.5386 19.9991 14.0302 19.9997 13.5V4.5C19.9991 3.96975 19.7882 3.4614 19.4132 3.08646C19.0383 2.71151 18.5299 2.50061 17.9997 2.5H3.9997Z"
        fill={fill}
      />
      <path
        d="M10.9997 10.4339C9.88741 10.4344 8.80683 10.0633 7.92939 9.37975L1.38539 4.28991C1.17598 4.12699 1.03988 3.88757 1.007 3.6243C0.97413 3.36104 1.04718 3.0955 1.2101 2.8861C1.37301 2.67669 1.61243 2.54059 1.8757 2.50771C2.13896 2.47484 2.4045 2.54789 2.61391 2.71081L9.15785 7.80065C9.68411 8.21098 10.3323 8.43383 10.9996 8.43383C11.667 8.43383 12.3152 8.21098 12.8414 7.80065L19.3854 2.71081C19.5948 2.54789 19.8603 2.47484 20.1236 2.50771C20.3869 2.54059 20.6263 2.67669 20.7892 2.8861C20.9521 3.0955 21.0252 3.36104 20.9923 3.6243C20.9594 3.88757 20.8233 4.12699 20.6139 4.28991L14.0699 9.37975C13.1924 10.0631 12.1119 10.4341 10.9997 10.4339Z"
        fill={fill}
      />
    </svg>
  )
}
