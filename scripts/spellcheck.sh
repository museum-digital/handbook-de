if ! [ -x "$(command -v aspell)" ]; then
    echo "Dieses script benötigt aspell"
    exit 1;
fi

SCRIPT_DIR="$( cd "$( dirname "$0" )" && pwd )"
MD_FILES=`find "$SCRIPT_DIR/../" -name "*.md"`

ASPELL_COMMAND="aspell \
    --lang=de \
    --personal='$SCRIPT_DIR/.aspell.de.pws'"

for FILE in $MD_FILES
do
    $ASPELL_COMMAND -c "$FILE"
done
