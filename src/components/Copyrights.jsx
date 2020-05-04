import React from "react"

import website from "../../config/website"

const Copyrights = () => {
  const { yearOfBuild } = website
  const currentYear = new Date().getFullYear()

  const copyrightYears =
    currentYear > yearOfBuild ? `${yearOfBuild} - ${currentYear}` : currentYear
  return (
    <div className="copyrights">
      <small>
        &copy; {copyrightYears} Radically Digital &mdash; All Rights Reserved
      </small>
    </div>
  )
}

export default Copyrights
