import React, {useState, createContext, useContext} from "react";

interface ChildType {
    children: JSX.Element[]
}
interface ChildProps {
    activeIndex: number,
    setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
    title?: string;
}

const CreateTabsContext = createContext<ChildProps>({
    activeIndex: 0,
    setActiveIndex: () => null,
});
const useContextData = () => useContext(CreateTabsContext);

const tab = {
    display: 'inline-block',
    padding: 10,
    margin: 10,
    borderBottom: '4px solid',
    borderBottomColor: '#ccc',
    cursor: 'pointer'
};

const styles: any = {
    tab,
    activeTab: {
        ...tab,
        borderBottomColor: '#000' },
    disabledTab: {
        ...tab,
        opacity: 0.25,
        cursor: 'default' },
    tabPanels: {
        padding: 10 }
};

export const TabList = ({children}) => {
    const childElem = React.Children.map(children, (child, index) => {
         return React.cloneElement(child, {
            index,
         })
    })
    return <div>{childElem}</div>
};

export const Tab = ({children, ...props}) =>{
    const {activeIndex, setActiveIndex} = useContextData()
    return(
        <div
            onClick={() => setActiveIndex(props.index)}
            style={props.disabled ? styles.disabledTab : (
                activeIndex === props.index ? styles.activeTab : styles.tab
            )}
        >
            {children}
        </div>
    )
};


export const TabPanels = ({children}: ChildType) =>{
    const {activeIndex} = useContextData();
    return(
        <div style={styles.tabPanels}>
            {children[activeIndex]}
        </div>
    )
}

export const TabPanel = ({children}) => <div>{children}</div>;

interface TabsProps {
    children: JSX.Element[];
    title?: string;
    initialActiveIndex?: number;
}

const Tabs = ({children, initialActiveIndex = 0, title}: TabsProps) => {
    const [activeIndex, setActiveIndex] = useState(initialActiveIndex);
    return (
        <CreateTabsContext.Provider value={{
            activeIndex,
            setActiveIndex
        }}>
            {title && <h1>{title}</h1>}
            {children}
        </CreateTabsContext.Provider>
    )
}


export default Tabs;
