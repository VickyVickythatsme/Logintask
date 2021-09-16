import {animals} from "../Assets/animals";
import NestedMenu from "../Components/NestedMenu";
import PageBox from "../Components/PageBox";
import PageContent from "../Components/PageContent";
import PageTitle from "../Components/PageTitle";
import PageButton from "../Components/PageButton";
export default function Animals(){
    return (<PageBox>
        <PageTitle title="Nested menu for Animals" />
        <PageContent> 
        <NestedMenu menuNodes={animals} level={0}/>
        <PageButton
          buttonName="Cancel"
          buttonFunction={() => {
            window.location.href = "/moremenu";
          }}
        />
        </PageContent>
    </PageBox>);
}