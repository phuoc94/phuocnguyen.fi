import React from "react"
import Image from "../querys/image"

const Jumpo = ({ pageTitle }) => (
  <div className="imageee">
    <Image srcPath={pageTitle} />
    <h1>{pageTitle}</h1>
  </div>
)

export default Jumpo
