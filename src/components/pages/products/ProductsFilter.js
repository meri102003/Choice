import { useContext, useState } from "react"; 
import { categorieslist, homeproductslist } from "../home/homeproductslist"; 
import { Context } from "../../actual components/Context"; 
import Aos from "aos"; 
import "aos/dist/aos.css"; 
import { useEffect } from "react"; 
 
export default function ProductsFilter() { 
    useEffect(() => { 
        Aos.init({ duration: 1000 }); 
    }, []); 
    const props = useContext(Context); 
    const [openSelect, setOpenSelect] = useState(false); 
    const filterOptions = [ 
        "Name Sort: A-Z", 
        "Name Sort: Z-A", 
        "Price Sort: High to Low", 
        "Price Sort: Low to High" 
    ]; 
 
    const filterSort = [ 
        { 
          sort: () => [...homeproductslist].sort((a, b) => a.name > b.name ? 1 : -1) 
        }, 
        { 
          sort: () => [...homeproductslist].sort((a, b) => a.name < b.name ? 1 : -1) 
        }, 
        { 
          sort: () => [...homeproductslist].sort((a, b) => b.price - a.price) 
        }, 
        { 
          sort: () => [...homeproductslist].sort((a, b) => a.price - b.price) 
        }, 
      ]; 
 
    return ( 
        <div className="products_filter_container" data-aos="fade-right"> 
            <h4>Categories</h4> 
            <div className="products_filter_content"> 
                <div className="products_filter_item" onClick={() => { 
                    props.setFilterProducts(homeproductslist); 
                    window.scrollTo({ top: 0, behavior: 'smooth' }); 
                    setOpenSelect(true); 
                }}>ALL</div> 
                <select 
                    style={{ display: openSelect ? "block" : 'none' }} 
                    onChange={(e) => { 
                        const selectedIndex = filterOptions.indexOf(e.target.value); 
                        props.setFilterProducts(filterSort[selectedIndex].sort()); 
                    }} 
                > 
                    <option value="" disabled defaultValue> 
                        Sort Product BY... 
                    </option> 
                    {filterOptions.map(filt => ( 
                        <option key={filt} value={filt}> 
                            {filt} 
                        </option> 
                    ))} 
                </select> 
                {categorieslist.map(ctg => { 
                    return <div className="products_filter_item" onClick={() => { 
                        props.filtering(ctg.name); 
                        window.scrollTo({ top: 0, behavior: 'smooth' }); 
                        setOpenSelect(false); 
                      }}> 
                        <img src={ctg.picture} alt="" /> 
                        <span>{ctg.name}</span> 
                    </div> 
                })} 
            </div> 
        </div> 
    ) 
}