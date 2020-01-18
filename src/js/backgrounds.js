import Utilities from './utilities';
const { hasProperty, delay } = Utilities;

import DefaultBackgrounds from './background_lists/default-backgrounds';
import CustomBackgrounds from './background_lists/custom-backgrounds';

const RETRY_DURATION = 3000;

/* Background Image */

function updateBackgroundImageInformation(backgroundItem, callback){
    document.querySelector('body').style.backgroundImage = `url(${backgroundItem.url})`;

    let imgAuthor = '-';
    if(hasProperty(backgroundItem, 'author')) {
        imgAuthor = backgroundItem.author;
    }
    const descriptionSelector = document.getElementById('image-description');

    descriptionSelector.classList.add('hidden');
    setTimeout(function () {
        descriptionSelector.textContent = imgAuthor;
        descriptionSelector.classList.remove('hidden');
    }, 1000);

    callback();
}

function setBackgroundImage(backgroundList, originalList){
    const is_file_protocol = window.location.protocol === 'file:';

    const backgroundItem = selectBackgroundItem(backgroundList);

    const filteredList = filterBackgroundList(backgroundList, backgroundItem);
    const updatedBackgroundList = coalesceBackgroundList(originalList, filteredList);

    return new Promise((resolve, reject) => {

        var img = new Image();
        img.addEventListener('load', function(){
            if (('naturalHeight' in this &&
                this.naturalHeight + this.naturalWidth === 0) ||
                (this.width + this.height == 0)) {
                this.onerror(this);
                return;
            }

            URL.revokeObjectURL(this.backgroundItem);

            updateBackgroundImageInformation(backgroundItem, () => resolve({
                backgroundList: backgroundList,
                updatedBackgroundList: updatedBackgroundList
            }));
        });
        img.addEventListener('error', reject({
            backgroundList: backgroundList,
            updatedBackgroundList: updatedBackgroundList
        }));

        if(is_file_protocol){
            img.src = backgroundItem.url;
        } else { 
            fetch(backgroundItem.url, {mode: 'no-cors'}).then(res => {
                if (res.ok) {
                    res.blob().then(b => {
                        img.src = URL.createObjectURL(b);
                    });
                } else {
                    reject({
                        backgroundList: backgroundList,
                        updatedBackgroundList: updatedBackgroundList
                    });
                }
            }).catch(() => reject({
                originalList: backgroundList,
                updatedBackgroundList: updatedBackgroundList
            }));
        }
    });

}

function filterBackgroundList(backgroundList, backgroundItem){
    return backgroundList.filter(item => item !== backgroundItem);
}

function coalesceBackgroundList(originalList, backgroundList = []){
    let list = backgroundList;

    if(backgroundList.length < 1){
        list = originalList.slice(0);
    }
    
    return list;
}

function selectBackgroundItem(backgroundList, random = Math.random()) {
    const index = Math.floor(random * backgroundList.length);
    const item = backgroundList[index];
        
    return item;
}

function cycleBackgrounds(backgroundList, cycle_duration, originalList = backgroundList){
    setBackgroundImage(backgroundList, originalList).then(({ originalList, updatedBackgroundList }) => 
        delay(cycle_duration).then(() => cycleBackgrounds(updatedBackgroundList, cycle_duration, originalList))
    ).catch(({ originalList, updatedBackgroundList }) =>
        delay(RETRY_DURATION).then(() => cycleBackgrounds(updatedBackgroundList, cycle_duration, originalList))
    );
}

const backgrounds = {
    getList: function(backgrounds_setting){
        switch (backgrounds_setting){
        case 'custom-backgrounds': 
            return CustomBackgrounds;
    
        default:
            return DefaultBackgrounds;
        }
    },
    initialize: cycleBackgrounds
};

export default backgrounds;
