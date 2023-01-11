
		read_var() {
			if [ -z "$1" ]; then
				echo "environment variable name is required"
				return
			fi
			
			local ENV_FILE='../.env'
			
			if [ ! -z "$2" ]; then
				ENV_FILE="$2"
			fi
			
			local VAR=$(grep ^$1= "$ENV_FILE" | xargs)
			IFS="=" read -ra VAR <<< "$VAR"
			echo ${VAR[1]}
		}
		
		SIUX_STUDIO_API_KEY=$(read_var SIUX_STUDIO_API_KEY)
		
		URL="https://app.siux.studio"
		
		FINAL_DATA="{\"brand\": {\"brandId\": \"632213d5a467b1178b31dde0\", \"version\": \"0.0.1\"}, \"apiKey\": \"$SIUX_STUDIO_API_KEY\"}"
		
		status=$(curl -w '\n%{http_code}' -vX POST "${URL}/api/v1/brands/package" -o "siux.studio.tar.gz" -d "$FINAL_DATA" --header "Content-Type: application/json")
		
		echo $status
		if [[ $status -ne 200 ]] ; then
			# if error exit code, print exit code
			echo "-------------------------------"
			echo "We couldn't download the package because of the errors below"
			echo ""
			cat siux.studio.tar.gz
			echo "
		--------------------------------"
		else
			# otherwise print last line of output, i.e. HTTP status code
			echo "--------"
			echo "Success!"
			echo "--------"
			tar -xvzf siux.studio.tar.gz
		fi
		
		rm -rf siux.studio.tar.gz
	