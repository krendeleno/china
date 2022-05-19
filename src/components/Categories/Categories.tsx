import React, {memo} from "react";

import styles from 'src/components/Categories/Categories.module.css'

const categories = [
    {name: "Флора и фауна", id: 1},
    {name: "Климат", id: 2},
    {name: "Проблемы", id: 3},
    {name: "Все", id: 4}
]

export const Categories = ({setCategory, currentCategory}: any) => {
    return (
        <div className={styles['Categories-Container']}>
            {categories.map(({name, id}) =>
                <div onClick={() => setCategory(id)} key={id}
                     className={currentCategory === id ? [styles['Categories-Current'],styles['Categories-Category']].join(' ')  : styles['Categories-Category']}>
                    <span>{name}</span>
                </div>
            )}
        </div>
    )
}