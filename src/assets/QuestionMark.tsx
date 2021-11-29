import * as React from 'react'
import Svg, { FillProps, Path } from 'react-native-svg'

export default ({ fill }: FillProps) => (
  <Svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <Path
      d="M15.5833 8.25C15.5833 7.03442 15.1004 5.86864 14.2409 5.00909C13.3814 4.14955 12.2156 3.66667 11 3.66667C9.78442 3.66667 8.61864 4.14955 7.75909 5.00909C6.89955 5.86864 6.41667 7.03442 6.41667 8.25C6.41667 8.49312 6.51324 8.72627 6.68515 8.89818C6.85706 9.07009 7.09022 9.16667 7.33333 9.16667C7.57645 9.16667 7.80961 9.07009 7.98151 8.89818C8.15342 8.72627 8.25 8.49312 8.25 8.25C8.25 7.7061 8.41128 7.17442 8.71346 6.72218C9.01563 6.26995 9.44512 5.91747 9.94762 5.70933C10.4501 5.50119 11.0031 5.44673 11.5365 5.55284C12.0699 5.65895 12.5599 5.92086 12.9445 6.30546C13.3291 6.69005 13.591 7.18005 13.6972 7.7135C13.8033 8.24695 13.7488 8.79988 13.5407 9.30238C13.3325 9.80488 12.9801 10.2344 12.5278 10.5365C12.0756 10.8387 11.5439 11 11 11C10.7569 11 10.5237 11.0966 10.3518 11.2685C10.1799 11.4404 10.0833 11.6736 10.0833 11.9167V13.75C10.0833 13.9931 10.1799 14.2263 10.3518 14.3982C10.5237 14.5701 10.7569 14.6667 11 14.6667C11.2431 14.6667 11.4763 14.5701 11.6482 14.3982C11.8201 14.2263 11.9167 13.9931 11.9167 13.75V12.7417C12.9519 12.5303 13.8824 11.9678 14.5505 11.1493C15.2187 10.3308 15.5835 9.3066 15.5833 8.25V8.25Z"
      fill={fill}
    />
    <Path
      d="M11 18.3333C11.5063 18.3333 11.9167 17.9229 11.9167 17.4167C11.9167 16.9104 11.5063 16.5 11 16.5C10.4937 16.5 10.0833 16.9104 10.0833 17.4167C10.0833 17.9229 10.4937 18.3333 11 18.3333Z"
      fill={fill}
    />
  </Svg>
)