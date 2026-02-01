import { Loading } from "./svg/loading";
import "./spinner.css"

type SpinnerProps = {
  size?: 'small' | 'large';
  ariaLabel?: string;
}

const sizeMap = {
  'small': 12,
  'large': 20
}

export function Spinner({
  size = 'small', 
  ariaLabel='loading'
}: SpinnerProps) {
  return (
    <span
      role="status"
      className="spinner"
      aria-label={ariaLabel}
      style={{
        width: sizeMap[size],
        height: sizeMap[size]
      }}>
      <Loading/>
    </span>
    
  )
}