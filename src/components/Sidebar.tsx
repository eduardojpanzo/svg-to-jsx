import { CheckBox } from "./CheckBox";
import { SidebarProps } from "./types";

export default function Sidebar({
  allChecked,
  isIndeterminate,
  checkedItems,
  setCheckedItems,
}: SidebarProps) {
  return (
    <div className="flex flex-col flex-1 text-slate-50">
      <p className="px-4 py-2 text-sm font-bold uppercase"> Options</p>

      <div className="flex flex-1 px-4 py-2 font-bold">
        <div>
          <CheckBox
            checked={allChecked}
            isIndeterminate={isIndeterminate}
            onChange={(e) =>
              setCheckedItems({
                memo: e.target.checked,
                typescript: e.target.checked,
                semi: e.target.checked,
                singleQuote: e.target.checked,
              })
            }
            id="all"
          >
            All
          </CheckBox>

          <div className="flex flex-col pl-6 mt-1">
            <CheckBox
              id="memo"
              checked={checkedItems.memo}
              onChange={(e) =>
                setCheckedItems({
                  ...checkedItems,
                  memo: e.target.checked,
                })
              }
            >
              Memo
            </CheckBox>

            <CheckBox
              id="typescript"
              checked={checkedItems.typescript}
              onChange={(e) =>
                setCheckedItems({
                  ...checkedItems,
                  typescript: e.target.checked,
                })
              }
            >
              TypeScript
            </CheckBox>

            <CheckBox
              id="semi"
              checked={checkedItems.semi}
              onChange={(e) =>
                setCheckedItems({
                  ...checkedItems,
                  semi: e.target.checked,
                })
              }
            >
              Semi Colon
            </CheckBox>

            <CheckBox
              id="singleQuote"
              checked={checkedItems.singleQuote}
              onChange={(e) =>
                setCheckedItems({
                  ...checkedItems,
                  singleQuote: e.target.checked,
                })
              }
            >
              Single Quote
            </CheckBox>
          </div>
        </div>
      </div>
    </div>
  );
}
