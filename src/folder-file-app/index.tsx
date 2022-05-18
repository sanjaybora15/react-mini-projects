import React, {CSSProperties, Fragment, useState} from "react"
import { FaFolderOpen } from 'react-icons/fa';

interface Props {
    fileData: any[];
}

const FileItem = ({title, extn, children, id}: any) => {
    const [isOpen, setIsOpen] = useState(false);
    const iconStyle: CSSProperties = {
        marginRight: 10,
        position: "relative",
        top: 3,
    }
    return(
        <div>
            <p onClick={(e) => setIsOpen(!isOpen)}>
                {children &&
                    <span style={iconStyle}><FaFolderOpen /></span>
                }
                <span style={!children ? {marginLeft: 2} : {}}>{title}{ !children && extn} </span>
            </p>
            {
                isOpen && <div style={{marginLeft: 25}}>{children}</div>
            }
        </div>
    )
}

const FolderIndex = (props: Props) => {
    const create = (child: any) => {
        return <FileItem
            title={child.title}
            isSelected={child.selected}
            id={child.id}
            key={child.id}
            extn={child.extension}
        >
            {
                child.child && child.child.map((item: any, index: number) => {
                    return (
                        <Fragment key={index}>
                            {create(item)}
                        </Fragment>
                    )
                })
            }

        </FileItem>
    }
    return (
        <div>
            {
               props.fileData.map((item, index) => (
                   <div key={index}>{create(item)}</div>
               ))
            }
        </div>
    )
}


export default FolderIndex;
