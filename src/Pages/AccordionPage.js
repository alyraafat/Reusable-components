import React from 'react'
import Accordion from '../Components/Accordion'

function AccordionPage() {
    const items = [
        {
          id: 'l2kj5',
          label: 'Can I use React on a project?',
          content:
            'item 1 hdfhdfgdfjdgfdhfhjdsfhdsdjf',
        },
        {
          id: 'lk2j35lkj',
          label: 'Can I use Javascript on a project?',
          content:
            'item 2 jfdjskfdskjfdskjfdskjfdfsdfdsfsdfdsf',
        },
        {
          id: 'l1kj2i0g',
          label: 'Can I use CSS on a project?',
          content:
            'You can use React on any project you want. You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.',
        },
      ];
    return (
        <div>
          <Accordion items={items}/>
        </div>
    )
}

export default AccordionPage
