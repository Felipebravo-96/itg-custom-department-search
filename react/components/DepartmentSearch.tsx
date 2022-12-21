import React, { useState } from "react"
import { useQuery } from "react-apollo"
import QUERY_VALUE from "../graphql/getDepartmentGroup.graphql"
import DepartmentGroup from "./DepartmentGroup"
import { SearchBar } from "vtex.store-components"

const DepartmentSearch = () => {

    const { data, loading } = useQuery(QUERY_VALUE)
    const [slug, setSlug] = useState("")

    // const [categories] = useState([data.categories[0].children])
    console.log("mis slug:", slug)
    return loading
        ?
        <div>Loading...</div>
        :
        <div className="flex">
            <DepartmentGroup
                departments={data?.categories[0]?.children}
                handleSetSlug={setSlug}
            />
            <SearchBar
                customSearchPageUrl={slug}
                placeholder="¿Que buscas en VTEX?"
                displayMode="search-and-clear-buttons"
            />
        </div>
}

export default DepartmentSearch