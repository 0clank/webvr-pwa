class LoadingBar{
	constructor(options){

	}
	
	set progress(delta){
		const percent = delta*100;
		this.progressBar.style.width = `${percent}%`;
	}
	
	set visible(value){
		if (value){
			this.domElement.style.display = 'flex';
		}else{
			this.domElement.style.display = 'none';
		}
	}

	get loaded(){
		if ( this.assets === undefined ) return false;
		
		let ploaded=0, ptotal=0;
		Object.values(this.assets).forEach( asset => {
			ploaded += asset.loaded;
			ptotal += asset.total;
		});

		return ploaded == ptotal;
	}

	update(assetName, loaded, total){
		if ( this.assets === undefined ) this.assets = {};
		
		if ( this.assets[assetName] === undefined ){
			this.assets[assetName] = { loaded, total };
		}else{
			this.assets[assetName].loaded = loaded;
			this.assets[assetName].total = total;
		}
		
		let ploaded=0, ptotal=0;
		Object.values(this.assets).forEach( asset => {
			ploaded += asset.loaded;
			ptotal += asset.total;
		});

		this.progress = ploaded/ptotal;
	}
}

export { LoadingBar };